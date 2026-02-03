import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';


describe('UserList', () => {
    it('should render no user when array is empty', () => {
        render(<UserList users={[]} />)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()
    })


    it('should render list of users', () => {
        const users: User[] = [
            { id: 1, name: "yash" },
            { id: 2, name: "raj" }
        ]

        render(<UserList users={users} />)

        users.forEach(user => {
            const link = screen.getByRole('link', { name: user.name })
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})