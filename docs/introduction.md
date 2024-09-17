/app_pdv
    /templates
        base.html
        index.html
        caixa.html
        venda.html
    app.py
    database.db



from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Conexão com o banco de dados
def conectar_bd():
    return sqlite3.connect('database.db')

# Rota principal (home)
@app.route('/')
def index():
    return render_template('index.html')

# Rota para abrir o caixa
@app.route('/caixa/abrir', methods=['GET', 'POST'])
def abrir_caixa():
    if request.method == 'POST':
        saldo_inicial = float(request.form['saldo_inicial'])
        data_abertura = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        conexao = conectar_bd()
        cursor = conexao.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS caixa (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                data_abertura TEXT,
                saldo_inicial REAL,
                saldo_atual REAL,
                aberto BOOLEAN
            )
        ''')

        cursor.execute('''
            INSERT INTO caixa (data_abertura, saldo_inicial, saldo_atual, aberto)
            VALUES (?, ?, ?, ?)
        ''', (data_abertura, saldo_inicial, saldo_inicial, True))

        conexao.commit()
        conexao.close()
        return redirect(url_for('index'))
    
    return render_template('caixa.html')

# Rota para registrar uma venda
@app.route('/venda', methods=['GET', 'POST'])
def realizar_venda():
    if request.method == 'POST':
        produto = request.form['produto']
        quantidade = int(request.form['quantidade'])
        preco = float(request.form['preco'])
        total = quantidade * preco
        data_venda = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        conexao = conectar_bd()
        cursor = conexao.cursor()

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS vendas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                produto TEXT,
                quantidade INTEGER,
                preco REAL,
                total REAL,
                data_venda TEXT
            )
        ''')

        cursor.execute('''
            INSERT INTO vendas (produto, quantidade, preco, total, data_venda)
            VALUES (?, ?, ?, ?, ?)
        ''', (produto, quantidade, preco, total, data_venda))

        # Atualiza o saldo do caixa
        cursor.execute('''
            UPDATE caixa SET saldo_atual = saldo_atual + ? WHERE aberto = 1
        ''', (total,))

        conexao.commit()
        conexao.close()

        return redirect(url_for('index'))
    
    return render_template('venda.html')

# Rota para fechar o caixa
@app.route('/caixa/fechar', methods=['POST'])
def fechar_caixa():
    conexao = conectar_bd()
    cursor = conexao.cursor()

    cursor.execute('''
        SELECT id, saldo_atual FROM caixa WHERE aberto = 1 ORDER BY id DESC LIMIT 1
    ''')
    caixa_aberto = cursor.fetchone()

    if caixa_aberto:
        caixa_id = caixa_aberto[0]
        saldo_atual = caixa_aberto[1]

        cursor.execute('''
            UPDATE caixa
            SET aberto = 0
            WHERE id = ?
        ''', (caixa_id,))

        conexao.commit()
        conexao.close()
        return f"Caixa fechado com saldo de R$ {saldo_atual:.2f}"
    else:
        return "Nenhum caixa aberto encontrado.", 400

if __name__ == '__main__':
    app.run(debug=True)

4. Templates

index.html (Página Inicial):


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>PDV - Ponto de Venda</title>
</head>
<body>
    <h1>Bem-vindo ao PDV</h1>
    <a href="/caixa/abrir">Abrir Caixa</a> | 
    <a href="/venda">Registrar Venda</a> | 
    <form action="/caixa/fechar" method="post" style="display:inline;">
        <button type="submit">Fechar Caixa</button>
    </form>
</body>
</html>

caixa.html (Abertura de Caixa):


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Abrir Caixa</title>
</head>
<body>
    <h1>Abrir Caixa</h1>
    <form method="post">
        <label>Saldo Inicial:</label>
        <input type="number" step="0.01" name="saldo_inicial" required>
        <button type="submit">Abrir Caixa</button>
    </form>
</body>
</html>

venda.html (Registro de Venda):


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Registrar Venda</title>
</head>
<body>
    <h1>Registrar Venda</h1>
    <form method="post">
        <label>Produto:</label>
        <input type="text" name="produto" required>
        <br>
        <label>Quantidade:</label>
        <input type="number" name="quantidade" required>
        <br>
        <label>Preço Unitário:</label>
        <input type="number" step="0.01" name="preco" required>
        <br>
        <button type="submit">Registrar Venda</button>
    </form>
</body>
</html>
