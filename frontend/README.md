# VectorShift_Frontend _Technical Assessment

## Overview
This project is a node-based pipeline editor built as part of the VectorShift Frontend Technical Assessment. The goal was to design a reusable node system, enhance UI/UX, implement dynamic node behavior, and integrate a frontend workflow with a backend service.

The application allows users to create a pipeline of nodes, submit it, and receive feedback on the pipeline structure.

---

## Tech Stack
- **Frontend:** React (JavaScript)
- **Backend:** FastAPI (Python)
- **Styling:** CSS
- **API Communication:** REST

---

## Key Features

### Node Abstraction
- Created a reusable `BaseNode` component to avoid duplication.
- All node types (Input, Text, Timer, Output, etc.) extend this base abstraction.
- New nodes can be added easily with minimal code.

### Dynamic Text Node
- Auto-resizes as the user types for better visibility.
- Detects variables using `{{variable}}` syntax.
- Dynamically generates input handles based on detected variables.

### UI & Styling
- Dark SaaS-style editor interface.
- Dedicated editor canvas with subtle grid background.
- Elevated node cards with depth and hover effects.
- Clean and professional design focused on usability.

### Backend Integration
- Frontend sends pipeline nodes and edges to a FastAPI backend.
- Backend calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline forms a Directed Acyclic Graph (DAG)
- Results are displayed to the user in a friendly alert.

---

## How to Run the Project

### Frontend
```bash
cd frontend
npm install
npm start
