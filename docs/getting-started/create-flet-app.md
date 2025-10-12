import 'package:flutter/material.dart';

void main() {
  runApp(ECRealApp());
}

class ECRealApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EC Real Calculator',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: ECRealHomePage(),
    );
  }
}

class ECRealHomePage extends StatefulWidget {
  @override
  _ECRealHomePageState createState() => _ECRealHomePageState();
}

class _ECRealHomePageState extends State<ECRealHomePage> {
  TextEditingController ecController = TextEditingController();
  TextEditingController vwcController = TextEditingController();
  String resultado = "EC Real: ";

  void calcularECReal() {
    double? ecBulk = double.tryParse(ecController.text);
    double? vwc = double.tryParse(vwcController.text);

    if (ecBulk != null && vwc != null) {
      double fatorCorrecao = 0.995 * (vwc / (100 - vwc)) + 3.889;
      double ecReal = ecBulk * fatorCorrecao;
      setState(() {
        resultado = "EC Real: ${ecReal.toStringAsFixed(2)} µS/cm";
      });
    } else {
      setState(() {
        resultado = "Erro: Insira valores numéricos";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Calculadora de EC Real")),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: ecController,
              decoration: InputDecoration(labelText: "EC medida no substrato (µS/cm)"),
              keyboardType: TextInputType.number,
            ),
            TextField(
              controller: vwcController,
              decoration: InputDecoration(labelText: "Umidade volumétrica (VWC %)"),
              keyboardType: TextInputType.number,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: calcularECReal,
              child: Text("Calcular EC Real"),
            ),
            SizedBox(height: 20),
            Text(resultado, style: TextStyle(fontSize: 20)),
          ],
        ),
      ),
    );
  }
}
