import "./App.css";
import { MovieFormComponent } from "./components/movie-form/movie-form";
import { ArtListComponent } from "./components/art-list/art-list";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MovieFormComponent />
        <ArtListComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
