import Link from "next/link";
import Image from "next/image";
import shake from "./shakes.jpg";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingledrink = async (id) => {
  await new Promise((resolve) => setTimeout(resolve), 10000);
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("failed to  fetch drinks");
  }

  return await response.json();
};

const singledrinkPage = async ({ params }) => {
  const data = await getSingledrink(params.id);

  const name = data?.drinks[0]?.strDrink;
  const image = data?.drinks[0]?.strDrinkThumb;

  return (
    <div className="px-4">
      <Link className="btn my-8 btn-secondary" href="/drinks">
        back to drinks
      </Link>
      <Image
        src={image}
        width={300}
        height={300}
        priority
        className="w-48 h-48 rounded-sm"
        alt={name}
      />
      <h1 className="text-3xl">{name}</h1>
    </div>
  );
};

export default singledrinkPage;
