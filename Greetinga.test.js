import { render, screen } from "@testing-library/react/dist/pure";
import Greeting from "./Greeting";

global.featch = just.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: 'john'}),
    })
    
);

test('fetches and displays user name', async () => {render(<Greeting/>);
    const GreetingElement = await
    screen.findByText(/hello, john/i);
    expect(GreetingElement).toBeInTheDocument();
});