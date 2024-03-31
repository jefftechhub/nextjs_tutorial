import React from "react";
import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve), 10000);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to  fetch drinks");
  }
  const data = await response.json();

  return data;
};

const DrinkPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <h1 className="text-4xl capitalize m-6">drinks</h1>

      <ul className="p-2 grid sm:grid-cols-5 gap-6 ">
        {data.drinks.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <Link href={`/drinks/${item.idDrink}`}>
                <Image
                  src={item.strDrinkThumb}
                  width={200}
                  height={200}
                  className="rounded-md object-contain w-full"
                  alt="image"
                />
                <h1>{item.strDrink}</h1>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DrinkPage;
