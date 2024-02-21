import { deleteStufflist } from "~/app/api/todo/actions";
import type { Stufflist } from "~/types";

type DeleteListProps = {
  currentList: Stufflist;
};

const DeleteList: React.FC<DeleteListProps> = ({ currentList }) => {
  const listId = currentList.id.toString();

  function SubmitButton() {
    return (
      <button
        className="btn btn-error btn-sm rounded-none text-white"
        type="submit"
      >
        Delete list
      </button>
    );
  }

  return (
    <>
      <form
        action={deleteStufflist.bind(null, listId)}
        className="flex flex-row"
      >
        <input type="hidden" name="id" required value={listId} />
        <SubmitButton />
      </form>
    </>
  );
};
export default DeleteList;
