import { TodoHeader } from './components/TodoHeader';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import TodoProvider from './context/TodoProvider';
import './styles.scss';


const TodoApp = () => {

return (
  
	<div className="container">

		<section>

			<h2>#todo</h2>

			<TodoProvider>
				<TodoHeader/>
				<TodoForm/>
				<TodoList/>
			</TodoProvider>
			

		</section>

	</div>
	
)

}

export default TodoApp;
