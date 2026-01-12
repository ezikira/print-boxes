document.getElementById("orderForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const f = e.target;

    const data = {
        type: f.type.value,
        length: f.length.value,
        width: f.width.value,
        height: f.height.value,
        material: f.material.value,
        quantity: f.quantity.value,
        name: f.name.value,
        phone: f.phone.value,
        email: f.email.value,
        comment: f.comment.value
    };

    console.log("Заявка:", data); // пока просто выводим

    document.getElementById("result").innerText =
        "Заявка отправлена. Мы свяжемся с вами.";

    f.reset();
});

