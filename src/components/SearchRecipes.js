import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SearchRecipes extends Component{
	search(){
		const url = 'http://www.recipepuppy.com/api/';
	}
	render(){
		return(
			<Form inline>
				<FormGroup>
					<ControlLabel>Ingredientes</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="garlic, chicken" />
				</FormGroup>
				{' '}
				<FormGroup>
					<ControlLabel>Dish</ControlLabel>
					<FormControl type="text" placeholder="adobo" />
					</FormGroup>
					{' '}
					<Button>Submit</Button>
			</Form>
		);
	}
}

export default SearchRecipes;
