// Controller
function AddUses() {
    Uses.push({

        modul1: Usesmodul1.value,
        modul2: Usesmodul2.value,
        modul3: Usesmodul3.value,
        isDone: false
    });

    Usesmodul1.value = '';
    Usesmodul2.value = '';
    Usesmodul3.value = '';

    adminControllerShow();
}