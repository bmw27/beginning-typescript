const greeting: string = 'Hello, Laracasts!';

const year: number = 2021;

const addTwoNumbers = (a: number, b: number): number => a + b;

interface User {
    id: string;
    name: string;
}

interface Book {
    id: string;
    name: string;
    releaseDate?: Date;
}

const getUserById = (id: string): User => ({
    id,
    name: "John Doe",
});

const getBookById = (id: string): Book => ({
    id,
    name: "TypeScript is Best Script!",
    releaseDate: new Date(),
});

const user  = getUserById('uuid-1');
const book  = getBookById('uuid-1');

const saveUser = (user: User) => console.log('saving user', {
    prop1: user.id,
    prop2: user.name,
});

const saveBook = (book: Book) => console.log('saving book', {
    prop1: book.id,
    prop2: book.name,
    prop3: book.releaseDate?.toISOString(),
});

saveUser(book);
saveBook(user);
