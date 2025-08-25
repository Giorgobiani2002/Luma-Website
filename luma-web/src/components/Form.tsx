"use client";

import { useForm } from "react-hook-form";
import PrivacyTerms from "./PrivacyTerms";
import { useState } from "react";
import axios from "axios";

type FormValues = {
  name: string;
  lastName: string;
  age: string;
  height: string;
  mobileNumber: string;
  weight: string;
  education: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [accepted, setAccepted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // const selectedPhotos = [data.photo1, data.photo2, data.photo3].filter(
    //   (fileList) => fileList && fileList.length > 0
    // );
    // if (!accepted) {
    //   alert("გთხოვთ, დათანხმდეთ პირადი ინფორმაციისა და წესების მიღებას");
    //   return;
    // }
    // alert("თქვენ დათანხმდით წესებს და შეგიძლიათ გაგრძელება!");

    // if (selectedPhotos.length < 2) {
    //   alert("გთხოვთ ატვირთოთ მინიმუმ 2 სურათი");
    //   return;
    // }

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("age", String(data.age));
    formData.append("height", String(data.height));
    formData.append("mobileNumber", String(data.mobileNumber));
    formData.append("weight", String(data.weight));
    formData.append("education", data.education);

    if (data.photo1?.[0]) formData.append("photo1", data.photo1[0]);
    if (data.photo2?.[0]) formData.append("photo2", data.photo2[0]);
    if (data.photo3?.[0]) formData.append("photo3", data.photo3[0]);

    try {
      const response = await axios.post(
        "http://localhost:3001/donors",
        formData,
        {
          headers: {
            "Content-Type": "application/json", 
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    alert("მონაცემები წარმატებით გაიგზავნა!");
  };

  const [setPrivacy, isSetPrivacy] = useState(false);

  return (
    <div>
      <div className="">
        <h2 className="mt-[32px] bg-black p-2 max-w-[210px] rounded-4xl text-center cursor-pointer text-white">
          საკონტაქტო ინფორმაცია
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[20px] ">
          <div className="flex gap-1 ">
            <div className="flex flex-col flex-1">
              <label className="font-bold">სახელი</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border-[1px] rounded-[5px] border-black pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]"
                placeholder="ლიკა"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-bold">გვარი</label>
              <input
                type="text"
                {...register("lastName", { required: "LastName is required" })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]"
                placeholder="აბუაშვილი"
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName.message}</p>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-bold">ასაკი</label>
              <input
                type="number"
                {...register("age", { required: "Age is required" })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] max-w-[220px] w-full mt-[8px]"
                placeholder="25"
              />
              {errors.age && (
                <p className="text-red-600">{errors.age.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col mt-[24px] flex-1 max-w-[170px]">
              <label className="font-bold">ტელეფონი</label>
              <input
                type="number"
                {...register("mobileNumber", {
                  required: "mobileNumber is required",
                })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px] w-full "
                placeholder="568 789 456"
              />
              {errors.mobileNumber && (
                <p className="text-red-600">{errors.mobileNumber.message}</p>
              )}
            </div>

            <div className="flex flex-col mt-[24px] flex-1 ">
              <label className="font-bold">განათლება</label>
              <input
                type="text"
                {...register("education", {
                  required: "Education is required",
                })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 h-[40px] mt-[8px] max-w-[210px] w-full"
                placeholder="საქართველოს ტექნიკური უნივერსიტეტი"
              />
              {errors.education && (
                <p className="text-red-600">{errors.education.message}</p>
              )}
            </div>
          </div>

          <h2 className="mt-[32px] bg-black p-2 max-w-[250px] rounded-4xl text-center cursor-pointer text-white">
            ატვირთეთ თქვენი სურათები
          </h2>
          <h2 className="mt-2.5">ატვირთეთ მინიმუმ 2 სურათი</h2>
          <div className="flex gap-4 mt-[20px]">
            <label className="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden">
              <span className="text-gray-400 text-3xl">+</span>
              <input type="file" {...register("photo1")} className="hidden" />
            </label>
            <label className="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden">
              <span className="text-gray-400 text-3xl">+</span>
              <input type="file" {...register("photo2")} className="hidden" />
            </label>
            <label className="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded-lg overflow-hidden">
              <span className="text-gray-400 text-3xl">+</span>
              <input type="file" {...register("photo3")} className="hidden" />
            </label>
          </div>

          <h2 className="mt-[32px] bg-black p-2 max-w-[250px] rounded-4xl text-center cursor-pointer text-white">
            სავალდებულო ინფორმაცია
          </h2>
          <div className="flex gap-3">
            <div className="flex flex-col mt-[24px]">
              <label className="font-bold">წონა (კგ-ში)</label>
              <input
                type="number"
                {...register("weight", { required: "Weight is required" })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px]"
                placeholder="55"
              />
              {errors.weight && (
                <p className="text-red-600">{errors.weight.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-[24px] flex-1">
              <label className="font-bold">სიმაღლე (სმ-ში)</label>
              <input
                type="number"
                {...register("height", { required: "height is required" })}
                className="border-[1px] border-black rounded-[5px] pl-1.5 mt-[8px] h-[40px] max-w-[170px] w-full"
                placeholder="165"
              />
              {errors.height && (
                <p className="text-red-600">{errors.height.message}</p>
              )}
            </div>
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-4 h-4 accent-black"
            />
            <span>
              ვეთანხმები პირადი ინფორმაციისა და წესების მიღებას.{" "}
              <button
                onClick={() => {
                  isSetPrivacy(true);
                }}
                className="text-black font-extrabold underline cursor-pointer"
              >
                წესების წაკითხვა
              </button>
            </span>
          </label>

          <div className="flex justify-center mt-[24px]">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
            >
              რეგისტრაცია
            </button>
          </div>
        </form>
      </div>
      {setPrivacy && <PrivacyTerms onClose={() => isSetPrivacy(false)} />}
    </div>
  );
}
