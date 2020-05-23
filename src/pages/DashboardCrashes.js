import React from "react";
import DashboardNav from "../components/Header/DashboardNav";

const DashboardCrashes = () => {
  const body = (
    <div className="container-fluid my-4 pt-4">
        <div className="bg-white shadow m-1 p-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem accusamus adipisci doloremque, laborum impedit optio dolorum eligendi reiciendis, obcaecati quod est ad quo quam incidunt maiores numquam iusto cupiditate consectetur quisquam minus nemo. Incidunt perferendis nam eaque reprehenderit fugiat repudiandae est placeat totam deleniti beatae et eius enim saepe odio, minima consequatur ut delectus quaerat, magni nobis ipsam unde, velit dolor. Obcaecati, officia quo asperiores, aliquam mollitia rem natus rerum, modi vitae nam totam. Maiores sint dolore cupiditate accusamus assumenda. Rem, beatae quo.
                 Alias ad suscipit inventore consequuntur aut natus doloribus eveniet? Voluptatum, dolorem dicta odio libero quia impedit!</p>
        </div>
    </div>
  );
  return <DashboardNav body={body} />;
};

export default DashboardCrashes;
