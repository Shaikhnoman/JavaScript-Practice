{
    function Cels(far) {
        return (5 / 9) * (far - 32);
    }

    let out = Cels(56);
    document.write(`The temp in  celsius is ${out}`)
}