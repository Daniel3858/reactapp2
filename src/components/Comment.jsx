/* eslint-disable react/prop-types */

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
    const [likeComment, setLikeComment] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeComment((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/daniel3858.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Albuquerque</strong>
                            <time title='11 de maio ás 08:13h' dateTime='2024-05-02 08:13:30'> Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}