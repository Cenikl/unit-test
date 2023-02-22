import { render, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
        expect(node.children).toHaveLength(2);
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    //TODO: implement this
    it('callback is called', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const checking = getByTestId('test-list-item-1');
        fireEvent.click(checking);
        expect(mockOnCheck).toBeCalledTimes(1);
    });

    //TODO: implement this
    it('callback is not called when not checkable', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        
        expect(node.children).toHaveLength(1);
        expect(mockOnCheck).toBeCalledTimes(0);
    });

    //TODO: implement this
    it('matches saved snapshot', () => {
        const tree = renderer.create(<ListItem id='list-item-test'checkable={true}onCheck={mockOnCheck}item='Lorem ipsum dolor sit amet consectetur'/>
).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it('matches saved snapshot 2', () => {
        const tree = renderer.create(
            <ListItem
                id='list-item-test'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});