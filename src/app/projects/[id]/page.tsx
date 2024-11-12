"use client";

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TImelineView";
import Table from "../TableView";
import ModalNewTask from '@/components/ModalNewTask';

type Props = {
    params: {id: string}
}

const Project = ({params}: Props) => {
    const {id} = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
        <ModalNewTask isOpen={isModalNewTaskOpen} onClose={() => setIsModalNewTaskOpen(false)}/>
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        { activeTab === "Board" && (
          <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
        { activeTab === "List" && (
          <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
        { activeTab === "Timeline" && (
          <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
         { activeTab === "Table" && (
          <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
    </div>
  )
}

export default Project