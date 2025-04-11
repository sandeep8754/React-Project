import { render, screen, waitFor} from '@testing-library/react'
import UserProfile from '/UserProfile';

globalThis.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: 'john'}),
    })
);
test('fetches and displys the user profile', async () => {
    await waitFor(() => screen.getByText(/hello, john/i));
    expect(screen.get(/hello, john/i)).toBeIntheDocument();
});