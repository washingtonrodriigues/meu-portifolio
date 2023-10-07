import React from "react";
import { Table } from "react-bootstrap";
import skills from './skills.json'
import classNames from "classnames";
import styles from './styles.module.css'

export default function Skills() {

    const splitArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const skillsChunks = splitArray(skills, 3);

    return (
        <Table responsive="sm" className={classNames(styles.skills_table)}>
            <tbody className={classNames(styles.skills_tbody)}>
                {skillsChunks.map((chunk, index) => (
                    <tr className={classNames(styles.skills_tr)} key={index}>
                        {chunk.map((skill, skillIndex) => (
                            <td className={classNames(styles.skills_td)} key={skillIndex}>
                                <div>
                                    <span className={classNames(styles.skills_span)}>.</span>
                                    <p className={classNames([styles.skills_p, [styles.skills_technologie]])}>{skill.skill}<span className={classNames([styles.skills_p, [styles.skills_level]])}>{skill.level}</span></p>

                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
