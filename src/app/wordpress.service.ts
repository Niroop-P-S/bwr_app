import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  // private apiUrl = 'http://localhost/wordpress/index.php/wp-json/wp/v2'

  private apiUrl = 'https://missamusing.com/wp-json/wp/v2'

  constructor(private http: HttpClient) { }

  getPosts(perPage: number = 6, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('per_page', perPage.toString())
      .set('page', page.toString());
    
    return this.http.get<any>(`${this.apiUrl}/posts`, { 
      params, 
      observe: 'response' 
    }).pipe(
      map(response => {
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalPosts = response.headers.get('X-WP-Total');
        
        return {
          posts: response.body,
          totalPages: totalPages ? parseInt(totalPages) : 1,
          totalPosts: totalPosts ? parseInt(totalPosts) : response.body.length
        };
      })
    );
  }
  
  /**
 * Get a single post by ID
 * @param id The post ID to fetch
 * @returns Observable containing the post data
 */
getSinglePost(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
}
  

  getCategories(): Observable<any> {
    return this.http.get<Categories[]>(`${this.apiUrl}/categories`);
  }

  getCategoryPosts(id: number): Observable<any> {
    return this.http.get<Categories[]>(`${this.apiUrl}post?categories=${id}`);
  }

  getTags(): Observable<any> {
    return this.http.get<Categories[]>(`${this.apiUrl}/tags`);
  }

  /**
   * Search for posts containing a specific search term
   * @param searchTerm The term to search for
   * @param perPage Number of posts per page (default: 6)
   * @param page Page number (default: 1)
   * @returns Observable with search results
   */
  searchPosts(searchTerm: string, perPage: number = 6, page: number = 1): Observable<any> {
    // Create query parameters
    let params = new HttpParams()
      .set('search', searchTerm)
      .set('per_page', perPage.toString())
      .set('page', page.toString());
    
    // Return the HTTP request with response headers
    return this.http.get<any>(`${this.apiUrl}/posts`, { 
      params, 
      observe: 'response' 
    }).pipe(
      map(response => {
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalPosts = response.headers.get('X-WP-Total');
        
        return {
          posts: response.body,
          totalPages: totalPages ? parseInt(totalPages) : 1,
          totalPosts: totalPosts ? parseInt(totalPosts) : response.body.length
        };
      })
    );
  }

  /**
   * Get posts filtered by category
   * @param categoryId The category ID to filter by
   * @param perPage Number of posts per page (default: 6)
   * @param page Page number (default: 1)
   * @returns Observable with filtered posts
   */
  getPostsByCategory(categoryId: number, perPage: number = 6, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('categories', categoryId.toString())
      .set('per_page', perPage.toString())
      .set('page', page.toString());
    
    return this.http.get<any>(`${this.apiUrl}/posts`, { 
      params, 
      observe: 'response' 
    }).pipe(
      map(response => {
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalPosts = response.headers.get('X-WP-Total');
        
        return {
          posts: response.body,
          totalPages: totalPages ? parseInt(totalPages) : 1,
          totalPosts: totalPosts ? parseInt(totalPosts) : response.body.length
        };
      })
    );
  }

  /**
   * Get posts filtered by tag
   * @param tagId The tag ID to filter by
   * @param perPage Number of posts per page (default: 6)
   * @param page Page number (default: 1)
   * @returns Observable with filtered posts
   */
  getPostsByTag(tagId: number, perPage: number = 6, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('tags', tagId.toString())
      .set('per_page', perPage.toString())
      .set('page', page.toString());
    
    return this.http.get<any>(`${this.apiUrl}/posts`, { 
      params, 
      observe: 'response' 
    }).pipe(
      map(response => {
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalPosts = response.headers.get('X-WP-Total');
        
        return {
          posts: response.body,
          totalPages: totalPages ? parseInt(totalPages) : 1,
          totalPosts: totalPosts ? parseInt(totalPosts) : response.body.length
        };
      })
    );
  }

  /**
   * Advanced search with multiple filters
   * @param options Object containing search parameters
   * @returns Observable with search results
   */
  advancedSearch(options: {
    search?: string,
    categories?: number[],
    tags?: number[],
    author?: number,
    perPage?: number,
    page?: number,
    orderBy?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug',
    order?: 'asc' | 'desc'
  }): Observable<any> {
    let params = new HttpParams();
    
    // Add search term if provided
    if (options.search) {
      params = params.set('search', options.search);
    }
    
    // Add categories if provided
    if (options.categories && options.categories.length > 0) {
      params = params.set('categories', options.categories.join(','));
    }
    
    // Add tags if provided
    if (options.tags && options.tags.length > 0) {
      params = params.set('tags', options.tags.join(','));
    }
    
    // Add author if provided
    if (options.author) {
      params = params.set('author', options.author.toString());
    }
    
    // Add pagination
    params = params.set('per_page', options.perPage?.toString() || '6');
    params = params.set('page', options.page?.toString() || '1');
    
    // Add ordering
    if (options.orderBy) {
      params = params.set('orderby', options.orderBy);
    }
    
    if (options.order) {
      params = params.set('order', options.order);
    }
    
    return this.http.get<any>(`${this.apiUrl}/posts`, { 
      params, 
      observe: 'response' 
    }).pipe(
      map(response => {
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalPosts = response.headers.get('X-WP-Total');
        
        return {
          posts: response.body,
          totalPages: totalPages ? parseInt(totalPages) : 1,
          totalPosts: totalPosts ? parseInt(totalPosts) : response.body.length
        };
      })
    );
  }
}