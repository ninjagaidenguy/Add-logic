import { saveCharacterData } from './utils/getCharacterData.js';
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Handle drag styling (optional)
['dragenter', 'dragover'].forEach((event) =>
  uploadArea.addEventListener(event, (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragging');
  })
);

['dragleave', 'drop'].forEach((event) =>
  uploadArea.addEventListener(event, (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragging');
  })
);

// Handle dropped files
uploadArea.addEventListener('drop', (e) => {
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    imageInput.files = e.dataTransfer.files;
    previewImage(file);
  }
});

// Handle file input
imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file && file.type.startsWith('image/')) {
    previewImage(file);
  }
});

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.src = e.target.result;
    imagePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function loadCharacter() {
  alert('Load Character clicked');
  // TODO: Add real logic
}

const saveCharacter = () => {
  // alert('Save Character clicked');
  // TODO: Add real logic
  saveCharacterData();
};

window.saveCharacter = saveCharacter;

function exportCharacter() {
  alert('Export Character clicked');
  // TODO: Add real logic
}
