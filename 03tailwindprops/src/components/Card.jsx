import React from "react";
//NOTE -props:key:value  下面为设定默认值,没有解构出来也可先设置
function Card({ username = "none", post = "not have" }) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/29749744/pexels-photo-29749744.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi error fugiat repudiandae iste repellat aperiam
              necessitatibus ipsam quod voluptatum. Unde nobis illo
              mollitia rerum adipisci suscipit, dolor obcaecati porro
              quibusdam!
            </p>
          </blockquote>
          <figcaption className="font">
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
