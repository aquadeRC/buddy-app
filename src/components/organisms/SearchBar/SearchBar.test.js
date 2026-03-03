import { render, screen, fireEvent, waitFor} from "tests-utils";
import {setupServer} from "msw/node";
import {SearchBar} from "./SearchBar";
import {handlers} from "mocks/handlers";

const server = setupServer(...handlers);

describe("SearchBar", () => {
    beforeEach(() => server.resetHandlers());
    afterAll(async () => server.close());
    beforeAll(async () => {
        server.listen();
    });

    it('Renders the component', () => {
        render(<SearchBar />);
        screen.getByText('Teacher');
        screen.getByPlaceholderText('Search');
    });

    it('Displays users when search phrase is matching', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'ad' } });

        await screen.findByText(/Adam Romański/);
    });

    it('Hides the results when input is empty', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'ad' } });
        await screen.findByText(/Adam Romański/);

        fireEvent.change(input, { target: { value: '' } });
        await waitFor(() => {
            expect(screen.getByLabelText('results')).not.toBeVisible();
        });
    });
})

//25:10