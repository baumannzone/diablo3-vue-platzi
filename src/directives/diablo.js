// Diablo 3 font-like
// Binding.Argument: Color ['white', 'bone']
// Binding.Modifiers: Border line position ['bottom','top']
// Binding.Value: Border line size (default 1)

// Usage: <h1 v-diablo:white.bottom="20">Hi!</h1>
// Usage: <h1 v-diablo:white.top>Hi!</h1>
// Usage: <h1 v-diablo>Hi!</h1>

export default {
  /**
   * @param el - HTML Element
   * @param binding - Bound (passed) data
   */
  bind (el, binding) {
    const color = { bone: '#e8dcc2', white: '#ffffff' }

    // Diablo font-like
    el.style.fontFamily = 'DiabloHeavy, sans-serif'

    // Argument (`:`)
    const arg = binding.arg === 'bone' ? 'bone' : 'white'
    if (arg === 'bone') {
      el.style.color = color.bone
    } else {
      // Default color
      el.style.color = color.white
    }

    // Modifiers (`.`)
    if (Object.keys(binding.modifiers).length > 0) {
      // Default value 1 (`=`)
      const value = binding.value || 1
      const borderExp = `${value}px solid ${color[arg]}`

      if (binding.modifiers.bottom) {
        el.style.borderBottom = borderExp
        el.style.paddingBottom = '10px'
      }
      if (binding.modifiers.top) {
        el.style.borderTop = borderExp
        el.style.paddingTop = '10px'
      }
    }
  }
}
