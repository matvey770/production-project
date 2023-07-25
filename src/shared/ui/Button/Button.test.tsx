import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from './Button'

describe('Sidebar', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Test class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
