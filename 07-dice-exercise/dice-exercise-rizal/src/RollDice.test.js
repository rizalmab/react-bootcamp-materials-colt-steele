import {screen, render, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import RollDice from "./RollDice"

test("Initial conditions", () => {
    const {container} = render(<RollDice />)

    // check that components render
    const dice = container.getElementsByClassName("Die-icon")
    for (let die of dice) {
        expect(die).toBeInTheDocument();
    }

    // check that button is enabled
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
})
test("On button click", () => {
    // button is disabled
    // button text changes
    // dice rerender? Change?
})