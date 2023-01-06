import React from 'react'
import { Table } from 'reactstrap'
import { useContext } from 'react'
import { Context } from './context/AddTodo'

function Formm() {
    const { todo, setTodo } = useContext(Context)
    const handleDelete = (elem) => {
        let copyy = todo.filter(ele => ele.id !== elem)
        setTodo(copyy)
    }
    const deleteAll = () => {
        setTodo([])
    }
    return (
        <div className='data'>
            <Table dark>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Todo
                        </th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((element, index) => (
                            <tr key={index}>
                                <th scope="row">
                                    {element.id}
                                </th>
                                <td>
                                    {element.todo}
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(element.id)}>Delete</button>

                                </td>
                            </tr>
                        ))
                    }
                    {/* */}
                </tbody>
            </Table>
            <button className='btn btn-primary' onClick={deleteAll}>Delete All</button>
        </div>
    )
}

export default Formm

