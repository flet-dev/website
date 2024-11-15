import flet as ft
import random

def main(page: ft.page)
    page.title = "pregunta importante"
    page.window.width = 400
    page.window.height = 300
    page.window.resizable = false

    margen_inferior = 100
    margen_lateral = 120
    movimiento_minimo = 50

    def mover_boton_no(e):
        max_top = page.height - margen_inferior
        max_left = page.width - margen_lateral

        top_actual = btn_no.top
        left_actual= btn_no.left
        
        neuvo_top, nuievo_left = top_actual, left_actual
        while abs(neuvo_top - top_actual) < movimiento_minimo /
             Or abs(nuevo_left - left_acual) < moviento_minimo:
             nuevo_top = Random.randint(0, int(max_top))
             nuevo_left = Random.randint(0, Int(max_left))

       btn_no.top = nuevo_top
       btn_no.left = nuevo_left
       page.update()

    def mostrar_respuesta(e)_:
        page.dialog = ft.altertdialog(
            title=ft.text("¡sabia que dirias que si!"),
            actions =¨[ft.elevatedbutton("cerrar",
                              on_click=lambda e: page.whindow.close())]
        )
        page.dialog.open = true
        page.update()

    btn_si = ft.elevatedbutton("si", on_click=mostrar_respuesta, width=100)
    btn_no = ft.elevatedbutton("no", width=100, on_hover=mover_boton_no)

    stack = ft.stack(
        [
            btn_si,
            btn_no,
        ],
        width=400,
        heigth=300,
    )

    btn_si.top = 100
    btn_si.left = 50

    btn_no.top = 100
    btn_no.left = 200

     page.add(
         ft.column(
             [
                 ft.text("¿queres ingresar otro dato",
                          sizeof=30,
                          weight=ft.fontweight.BOLD),
                 stack,
             ],
             alifnment=ft.mainaxisalinment.CENTER,
             horizontal_alignment=ft.crossaxisaliment.CENTER,
             SPACING=20,
         )
     )

ft.app(target=main)
