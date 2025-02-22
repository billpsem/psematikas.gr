function changeBackgroundColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
    document.body.style.color = (parseInt(color.substring(1), 16) > 0xffffff / 2) ? '#000' : '#fff';
}
