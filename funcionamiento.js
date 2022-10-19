function validar() {
    nombre = document.forms.f1.n.value;
    apellido = document.forms.f1.ap.value;
    if (!nombre) {
        msg = "El campo nombre está vacío";
    }
    if (!apellido) {
        msg += "El campo apellido está vacío";
    }
    if (msg) {
        alert(" tengo hambre");
        return false;
    }
    return true;

}