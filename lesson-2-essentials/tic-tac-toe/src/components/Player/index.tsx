import React, { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

type Props = {
  name: string;
  symbol: string;
};
const Player: FC<Props> = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleOnEdit = useCallback(() => {
    setIsEditing((wasEditing) => !wasEditing);
  }, []);

  const handleOnChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  }, []);

  const displayedPlayerName = useMemo(
    () =>
      isEditing ? (
        <input type="text" required value={playerName} onChange={handleOnChangeName} />
      ) : (
        <span className="player-name">{playerName}</span>
      ),
    [handleOnChangeName, isEditing, playerName],
  );

  const buttonLabel = useMemo(() => (isEditing ? 'Save' : 'Edit'), [isEditing]);

  return (
    <li>
      <span className="player">
        {displayedPlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleOnEdit}>{buttonLabel}</button>
      </span>
    </li>
  );
};

export default Player;
