import { render, screen } from '@testing-library/react';
import BlogItem from './BlogItem';


describe('BlogItem test', ()=> {
    test('Test if title is rendered', ()=>{
        let props ={
            data: {
                frontmatter :{
                    title:'Blog 1'
                },
                excerpt:'This is test block'
            }
        }

        render(<BlogItem {...props}/>);
        let title = screen.getByText(/Blog 1/);

        expect(title).toBeInTheDocument();

    })
});