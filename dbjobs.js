rows = document.getElementsByTagName('tbody');
rows_length = rows.length
for (var i = 0; i < rows_length; ++i) {
    var type = rows[i].children[0].children[1].innerHTML
    if (type != 'job ann. ') {
        rows[i].style.display = 'none';
    }
}
