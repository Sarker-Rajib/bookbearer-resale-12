import { useEffect, useState } from "react";

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer)
                    setBuyerLoading(false)
                    // console.log(data);
                })
        }
    }, [email]);

    return [isBuyer, buyerLoading];
};

export default useBuyer;