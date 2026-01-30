import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// 1. Create User Profile when they first log in
export const createUserProfile = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  // If user doesn't exist, create them with "Free" plan
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName,
      plan: "Free",
      status: "Active",
      startDate: new Date().toISOString(),
    });
  }
};

// 2. Upgrade their Plan (Call this after payment)
export const updateUserPlan = async (userId, newPlan) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    plan: newPlan,
    status: "Active",
    lastPaymentDate: new Date().toISOString(),
  });
};

// 3. Cancel Subscription
export const cancelSubscription = async (userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    plan: "Free", // Revert to free
    status: "Canceled",
  });
};