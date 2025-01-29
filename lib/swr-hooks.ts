import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useUsuarios() {
  const { data, error } = useSWR(`/api/getusuarios`, fetcher)

  return {
    usuarios: data,
    isLoading: !error && !data,
    isError: error,
  }
}