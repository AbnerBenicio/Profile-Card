function toogleMode () {
    const html = document.documentElement //documentElement faz referência à tag html no início do index

    // if (html.classList.contains("light")) {
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // } Pode ser feito assim ou de um jeito bem mais fácil:

    html.classList.toggle("light")
}