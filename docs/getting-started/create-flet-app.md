import flet as ft


def main(page: ft.Page):
    page.title = "Login - App de Produtividade"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.theme_mode = ft.ThemeMode.LIGHT
    page.window_width = 400
    page.window_height = 600

    def login_click(e):
        if email.value == "" or senha.value == "":
            resultado.value = "Preencha todos os campos."
        else:
            resultado.value = f"Bem-vindo, {email.value}!"
        page.update()

    email = ft.TextField(label="Email", width=300, autofocus=True)
    senha = ft.TextField(label="Senha", password=True, can_reveal_password=True, width=300)

    resultado = ft.Text(value="", color="red")

    login_button = ft.ElevatedButton("Login", width=300, on_click=login_click)

    criar_conta = ft.TextButton("Criar Conta", url="#")

    page.add(
        ft.Column(
            [
                ft.Text("App de Produtividade", size=24, weight="bold"),
                email,
                senha,
                login_button,
                criar_conta,
                resultado,
            ],
            alignment=ft.MainAxisAlignment.CENTER,
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            spacing=20,
        )
    )


ft.app(target=main)
