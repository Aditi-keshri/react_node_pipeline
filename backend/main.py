from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes, edges):
    graph = {}

    # initialize graph
    for node in nodes:
        graph[node["id"]] = []

    # build adjacency list
    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    visited = set()
    visiting = set()

    def dfs(node):
        if node in visiting:
            return False  # cycle found
        if node in visited:
            return True

        visiting.add(node)
        for neighbor in graph.get(node, []):
            if not dfs(neighbor):
                return False
        visiting.remove(node)
        visited.add(node)
        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False

    return True

@app.post("/pipelines/parse")
def parse_pipeline(data: dict):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    dag_status = is_dag(nodes, edges)

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": dag_status
    }


