import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// when you name the file like this [id], , , /movies/:id eg. /12121
export default function Detail() {
  const router = useRouter();
  const [title, params] = router.query.params || [];
  console.log(router); // the query property is decided by the name of the file.
  console.log(params);
  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
}
// rename to [...id]
// the query is not a string anymore
// it's called a 'catch all' url
// router.query.id is now an array
// [...params] is a better name than id. maybe.

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
