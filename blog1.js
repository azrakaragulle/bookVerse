// Kategori filtreleme (şu an sadece stil değiştiriyor)
document.querySelectorAll('.category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
  
      // Kategorilere göre filtreleme burada yapılabilir
      // Şimdilik sadece örnek stil değişimi var
      const category = btn.textContent;
      console.log("Seçilen kategori:", category);
    });
  });
  