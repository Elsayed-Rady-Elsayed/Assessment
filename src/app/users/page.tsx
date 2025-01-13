"use client";

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, RootState, AppDispatch } from "../store/store";
import i18next from "i18next";

interface UserData {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

const Table: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const language = i18next.language;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="overflow-x-auto shadow-md w-full">
      <table
        className="min-w-full text-sm text-left text-gray-500"
        dir={language === "en" ? "ltr" : "rtl"}
      >
        <thead className="text-[10px] bg-gray-100">
          <tr>
            <th className="px-6 py-3">{i18next.t("firstName")}</th>
            <th className="px-6 py-3">{i18next.t("lastName")}</th>
            <th className="px-6 py-3">{i18next.t("phone")}</th>
            <th className="px-6 py-3">{i18next.t("Email")}</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              (user.FirstName != null || user.Email != null || user.Phone != null || user.LastName != null) && (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{user.FirstName}</td>
                  <td className="px-6 py-4">{user.LastName}</td>
                  <td className="px-6 py-4">{user.Phone}</td>
                  <td className="px-6 py-4">{user.Email}</td>
                </tr>
              )
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
