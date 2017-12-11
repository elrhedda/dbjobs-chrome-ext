var rows = document.getElementsByTagName('tbody');
var rows_length = rows.length;
var today = new Date();
for (var i = 0; i < rows_length; ++i) {
    var type = rows[i].children[0].children[1].innerHTML;
    var date = new Date(rows[i].children[0].children[4].innerHTML);
    if (type != 'job ann. ' || date < today) {
        rows[i].style.display = 'none';
    }
}
