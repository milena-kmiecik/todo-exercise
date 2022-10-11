//kod odpowiedzialny za przyciski
class Button {
    constructor(label, onClick, cssClasses) {
        this.label = label;
        this.onClick = onClick;
        this.disabled = false;
        this.cssClasses = cssClasses;
    }

    setDisabled(isDisabled) {
        this.disabled = isDisabled
    }

    render() {
        const button = document.createElement('button')
        button.classList.add('form__button')
        button.innerText = this.label
        this.cssClasses.forEach((cssClass)=>{
            button.classList.add(cssClass)
        })

        //przenieść style do css

        // button.style.outline = 'none'
        // button.style.border = '1px solid rgba(0,0,0,0.1)'
        // button.style.backgroundColor = 'white'
        // button.style.borderRadius = '4px'
        // button.style.padding = '4px'
        // button.style.cursor = 'pointer'
        // button.style.width = '100px'
        button.disabled = this.disabled

        if (this.onClick) {
            button.addEventListener('click',
                () => this.onClick()
            )
        }
        return button;
    }
}