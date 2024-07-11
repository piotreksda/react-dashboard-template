import { useEffect, useState } from "react";
import { RickAndMortyApi } from "../../apis/RickAndMortyCharactersAPI";
import { Character, Info } from "../../apis/rickAndMortyIterfaces";
import CharacterCart from "../../components/CharacterCard/CharacterCard";
import "./Dashboard.css";

export default function Dashboard() {
    const [rickAndMortyCharacterLoading, setRickAndMortyCharacterLoading] = useState(false);
    const [rickAndMortyCharactersList, setRickAndMortyCharactersList] = useState<Info<Character[]> | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setRickAndMortyCharacterLoading(true);
        RickAndMortyApi.get()
            .then((characters) => {
                setRickAndMortyCharactersList(characters);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setRickAndMortyCharacterLoading(false);
            });
    }, []);

    return (
        <div id="dashboardRoot">
            {rickAndMortyCharacterLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {rickAndMortyCharactersList && (
                <div className="cartContainer">
                    {rickAndMortyCharactersList.results?.map((character) => <CharacterCart key={character.id} image={character.image} name={character.name} type={character.type}/>)}
                </div>
            )}
        </div>
    );
}