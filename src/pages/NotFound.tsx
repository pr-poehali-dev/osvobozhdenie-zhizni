
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
          <Icon name="FileQuestion" className="h-12 w-12" />
        </div>
        <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Упс! Страница не найдена</p>
        <p className="text-gray-600 mb-8">
          Кажется, страница, которую вы ищете, была перемещена или не существует.
        </p>
        <Link to="/">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Home" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
