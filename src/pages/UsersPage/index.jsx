import FilterPanel from "./FilterPanel";
import UsersList from "./UsersList";
import styles from "./UsersPages.module.sass";

function UsersPage() {
  return (
    <section>
      <h1>Users List</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.filterContainer}>
          <FilterPanel />
        </div>
        <div className={styles.listContainer}>
          <UsersList />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
