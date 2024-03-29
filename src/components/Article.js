import { CgRemove } from 'react-icons/cg'
import { useDrag } from 'react-dnd';
import '../styles/Article.css'

const Article = ({ task, specify, onDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        item: {
            id: task.id,
        },
        type: 'BOX',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }))

    return (
        <article className='task' ref={drag} >
            <div className="article" id={specify} style={{ opacity: isDragging ? '0.5' : '1' }}>
                <p id='tasktext'>
                    {task.text}
                </p>
                <CgRemove className='remove' style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </div>
        </article>
    )
}
export default Article

