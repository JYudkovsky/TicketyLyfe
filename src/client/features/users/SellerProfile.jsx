import React from "react";
import { useGetUserQuery } from "./UserSlice";
import { useParams } from "react-router-dom";
import { useGetTicketQuery } from "../tickets/TicketSlice";

function getUser() {
  const { id } = useParams();
  const { data: user, error, isLoading } = useGetUserQuery(id);
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  const { SellerId } = useParams();
  const { data: sellerId } = useGetTicketQuery(SellerId);
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <>
      <div>
        <h1>{user.username}</h1>
        <h2>{user.email}</h2>
        <h3>{sellerId.sellerId}</h3>
      </div>
    </>
  );
}
