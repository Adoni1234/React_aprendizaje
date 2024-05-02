
const Modal = ({ isOpen, onClose, onSubmit, formData, handleChange, origins }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{(origins === 'creating')? 'Crear Elemento': 'Editar Elemento'}</h2>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formData.error && formData.error.name && (
                <p className="text-sm text-red-500">{formData.error.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium">
                Categoría
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formData.error && formData.error.category && (
                <p className="text-sm text-red-500">{formData.error.category}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="color" className="block text-sm font-medium">
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formData.error && formData.error.color && (
                <p className="text-sm text-red-500">{formData.error.color}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium">
                Precio
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formData.error && formData.error.price && (
                <p className="text-sm text-red-500">{formData.error.price}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
