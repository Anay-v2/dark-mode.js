const darkMode = {
    isDark: (localStorage.getItem('dark') || 'l') === 'd',
    init() {
        document.querySelectorAll('[data-dark-switch]').forEach(t => {
            let c = localStorage.getItem('dark') || (t.getAttribute('data-dark-init') || 'l')
            this.UpdateDark(c)
            const type = t.getAttribute('data-dark-event') || 'click'
            if(c === 'd') {
                document.querySelector('html').classList.add('dark')
            } else if(c === 'l') {
                document.querySelector('html').classList.remove('dark')
            }
            t.addEventListener(type, () => {
                if(c === 'd') {
                    c = 'l'
                    localStorage.setItem('dark', c)
                    document.querySelector('html').classList.remove('dark')
                } else if(c === 'l') {
                    c = 'd'
                    localStorage.setItem('dark', c)
                    document.querySelector('html').classList.add('dark')
                }
                this.UpdateDark(c)
            })
        })
    },
    UpdateDark(c) {
        this.isDark = c === 'd'
        document.querySelectorAll('[data-dark-on]').forEach(v => v.innerHTML = this.isDark ? (v.getAttribute('data-dark-d') || 'dark') : (v.getAttribute('data-dark-l') || 'light') )
        document.querySelectorAll('[data-dark-off]').forEach(v => v.innerHTML = this.isDark ? (v.getAttribute('data-dark-l') || 'light') : (v.getAttribute('data-dark-d') || 'dark') )
        this.UpdateDarkHook(c)
    },
    setDark(v) {
        let c = v ? 'l' : 'd'
        if(c === 'd') {
            document.querySelector('html').classList.remove('dark')
        } else if(c === 'l') {
            document.querySelector('html').classList.add('dark')
        }
        localStorage.setItem('dark', c)
        this.UpdateDark(c)
    },
    UpdateDarkHook: v => null, // this is a hook. by default it does nothing.
    addThemePlugin(name, classname, addVariant) {
        addVariant(`${name}`, `${classname || name} &`)
    }
}