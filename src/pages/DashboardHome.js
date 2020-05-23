import React from "react";
import DashboardNav from '../components/Header/DashboardNav';

const DashboardHome = () => {
  const body = <div className='container-fluid' >
    <div className="row my-4 pt-4 text-justify">
      <div className="col-sm-4">
        <div className='bg-white shadow m-1 p-3'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicin
          g elit. Eligendi, vitae reprehenderit nulla, pariatur provident d
          ignissimos distinctio quaerat quos, libero placeat ex nobis quas corrupt
          i adipisci quia sunt perspiciatis quod. Iste molestias nobis corrupti tempore
          architecto dolorem, recusandae odio eum quibusdam! Inventore optio mollitia quis,
          neque omnis, qui molestiae aliquid debitis obcaecati itaque repellendus
          voluptatibus rerum. Aut minus ducimus enim et nam rem accusamus perspiciatis
          eos ab praesentium consequatur ea, unde beatae voluptatum corrupti. Dolores quae
          nobis magnam labore, atque consequatur pariatur quia delectus! Ex necessitatibus
          nesciunt saepe deleniti nam nulla excepturi reiciendis fuga rerum quam quis sed.</p>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
            vero veniam! </p></div>

          </div>
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
            vero veniam! </p></div>

          </div>
          </div>
      </div>
      <div className="col-sm-8">
        <div className='bg-white shadow m-1 p-3'><p>Lorem ipsum dolor sit amet consectetur adipisicin
        g elit. Eligendi, vitae reprehenderit nulla, pariatur provident d
        ignissimos distinctio quaerat quos, libero placeat ex nobis quas corrupt
        i adipisci quia sunt perspiciatis quod. Iste molestias nobis corrupti tempore
        architecto dolorem, recusandae odio eum quibusdam! Inventore optio mollitia quis,
        neque omnis, qui molestiae aliquid debitis obcaecati itaque repellendus
        voluptatibus rerum. Aut minus ducimus enim et nam rem accusamus perspiciatis
        eos ab praesentium consequatur ea, unde beatae voluptatum corrupti. Dolores quae
        nobis magnam labore, atque consequatur pariatur quia delectus! Ex necessitatibus
        blanditiis exercitationem? Itaque asperiores a error, aspernatur rem veritatis dolor,
        quod nam modi amet fugiat. Ea provident officia obcaecati ipsam impedit. Unde quos quibusdam
        quis beatae sapiente alias nihil totam tenetur quod inventore sequi possimus aliquid,
        incidunt cum. Rem est esse harum autem aliquam consequatur illum eius? Accusantium
        nesciunt saepe deleniti nam nulla excepturi reiciendis fuga rerum quam quis sed,
        quidem minima praesentium molestias, debitis vitae maxime alias. Culpa placeat.</p></div>
        <div className="row mt-4">
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
             vero veniam! In aliquid provident quisquam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis,
              laboriosam rerum molestiae tempora numquam optio cumque 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur! Lorem, ipsum dolor sit amet 
             consectetur adipisicing elit. Cumque, nesciunt? accusamus hic temporibus animi soluta, maxime recusandae voluptate 
             natus magni delectus vero ut.</p></div>
            
          </div>
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
             vero veniam! In aliquid provident quisquam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis,
              laboriosam rerum molestiae tempora numquam optio cumque 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur! Lorem, ipsum dolor sit amet 
             consectetur adipisicing elit. Cumque, nesciunt? accusamus hic temporibus animi soluta, maxime recusandae voluptate 
             natus magni delectus vero ut.</p></div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  return(
    <DashboardNav body={body}/>
  )
};

export default DashboardHome;
